package com.example.gestionclientspring.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.gestionclientspring.exception.DataNotFoundException;
import com.example.gestionclientspring.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gestionclientspring.repository.ClientRepository;

@CrossOrigin(origins = "http://localhost:4200")
    @RestController
    @RequestMapping("/api/v1/")
    public class  ClientController {

        @Autowired
        private ClientRepository clientRepository;

        // Recuperer tous les clients
        @GetMapping("/clients")
        public List<Client> getAllClients(){
            return clientRepository.findAll();
        }

        // create client
        @PostMapping("/clients")
        public Client createClient(@RequestBody Client client) {
            return clientRepository.save(client);
        }

        // recuperer un client by id

        @GetMapping("/clients/{id}")
        public ResponseEntity<Client> getClientById(@PathVariable Long id) {
            Client client = clientRepository.findById(id)
                    .orElseThrow(() -> new DataNotFoundException("Client not exist with id :" + id));
            return ResponseEntity.ok(client);
        }

        // Modifier un client

        @PutMapping("/clients/{id}")
        public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails){
            Client client = clientRepository.findById(id)
                    .orElseThrow(() -> new DataNotFoundException("Client not exist with id :" + id));

            client.setFirstName(clientDetails.getFirstName());
            client.setLastName(clientDetails.getLastName());
            client.setEmailId(clientDetails.getEmailId());

            Client updatedClient = clientRepository.save(client);
            return ResponseEntity.ok(updatedClient);
        }

        // delete client rest api
        @DeleteMapping("/clients/{id}")
        public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id){
            Client client = clientRepository.findById(id)
                    .orElseThrow(() -> new DataNotFoundException("Client not exist with id :" + id));

            clientRepository.delete(client);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        }


    }
