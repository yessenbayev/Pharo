//
//  ViewController.swift
//  Final_pharo_app
//
//  Created by Alexandra Hernandez on 6/9/18.
//  Copyright © 2018 company. All rights reserved.
//

import UIKit
import Foundation
import CoreBluetooth
//import MapKit
//import CoreLocation

class ViewController: UIViewController{


    //welcome page
    @IBOutlet var Home_page: UIView!
    @IBOutlet weak var white_background: UIImageView!
    @IBOutlet weak var welcome_text: UITextField!
    @IBOutlet weak var lock_button: UIButton!
    @IBOutlet weak var find_button: UIButton!
    
    //FIND PAGE
    @IBOutlet weak var Find_pagee: UIView!
    @IBOutlet weak var find_btm_find: UIButton!
    @IBOutlet weak var lock_btm_find: UIButton!
    @IBOutlet weak var updated_img: UIImageView!
    
    //@IBOutlet weak var map_vieww: MKMapView!
    //let locationManager = CLLocationManager()
    
    //LOCK UNLOCK PAGE
    @IBOutlet weak var lockunlokpage: UIView!
    @IBOutlet weak var find_btm_lock: UIButton!
    @IBOutlet weak var lockunlock_btm_lock: UIButton!
    @IBOutlet weak var lockunlock_mainbtm: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        //show GPS
        //locationManager.delegate=self
        //locationManager.desiredAccuracy = kCLLocationAccuracyBest
        //locationManager.startUpdatingLocation()
    }

    //update GPS
    //func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]){
        //let location = locations[0]
        
        //let center = location.coordinate
        //let span = MKCoordinateSpan(latitudeDelta: 0.05, longitudeDelta: 0.05)
        //let region=MKCoordinateRegion(center:center, span:span)
        //map_vieww.setRegion(region,animated:true)
        //map_vieww.showsUserLocation=true
        
    //}
    
  
    
    
    @IBAction func click_lockunlock(_ sender: Any) {
        
        //hide main page
        welcome_text.isHidden=true
        lock_button.isHidden=true
        find_button.isHidden=true
        
        //show lockunlock page from welcome
        lockunlokpage.isHidden=false
        find_btm_lock.isHidden=false
        lockunlock_btm_lock.isHidden=false
        lockunlock_mainbtm.isHidden=false
        
    }
    
    @IBAction func click_find_welcome(_ sender: Any) {
        //hide main page
        welcome_text.isHidden=true
        lock_button.isHidden=true
        find_button.isHidden=true
        
        
        //hide lockunlock page
        lockunlokpage.isHidden=true
        find_btm_lock.isHidden=true
        lockunlock_btm_lock.isHidden=true
        lockunlock_mainbtm.isHidden=true
        
        //show Find page
        Find_pagee.isHidden=false
        find_btm_find.isHidden=false
        lock_btm_find.isHidden=false
       
       
        
      
        
       
    }
    //click find from lockunlock page
    @IBAction func click_find_bottom(_ sender: Any) {
        //hide main page
        welcome_text.isHidden=true
        lock_button.isHidden=true
        find_button.isHidden=true
        
        //hide lockunlock page
        lockunlokpage.isHidden=true
        find_btm_lock.isHidden=true
        lockunlock_btm_lock.isHidden=true
        lockunlock_mainbtm.isHidden=true
        
        //show Find page
        Find_pagee.isHidden=false
        find_btm_find.isHidden=false
        lock_btm_find.isHidden=false
    }
    //click lcok from find page
    @IBAction func click_lock_fromfind(_ sender: Any) {
        //hide main page
        welcome_text.isHidden=true
        lock_button.isHidden=true
        find_button.isHidden=true
        
        //hide Find page
        Find_pagee.isHidden=true
        find_btm_find.isHidden=true
        lock_btm_find.isHidden=true
        
        //show lockunlock page
        lockunlokpage.isHidden=false
        find_btm_lock.isHidden=false
        lockunlock_btm_lock.isHidden=false
        lockunlock_mainbtm.isHidden=false
        
    }
    
    @IBAction func click_MAIN_unlocklock(_ sender: Any) {
        //GET action
        guard let url = URL(string:"http://192.168.4.1:5000/lock") else { return }
        //"192.168.4.1:5000/lock"
        let session = URLSession.shared
        session.dataTask(with: url) { (data, response, error) in
            if let response = response {
                print(response)
            }
            
            if let data = data {
                print(data)
                do {
                    let json = try JSONSerialization.jsonObject(with: data, options: [])
                    print(json)
                } catch {
                    print(error)
                }
                
            }
            }.resume()
    }
    
    
    
    
}

